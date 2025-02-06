import sys
import csv
import requests
from random import choice
import time
import os
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from webdriver_manager.chrome import ChromeDriverManager

from PyQt5.QtWidgets import (QApplication, QWidget, QPushButton, QVBoxLayout, QFileDialog, QLabel, QMessageBox, QGroupBox)
from PyQt5.QtGui import QFont
from PyQt5.QtCore import Qt
import webbrowser
import subprocess
from PyQt5.QtWebEngineWidgets import QWebEngineView


class MailBlaster(QWidget):
    
    def __init__(self):
        super().__init__()
        self.gmail_data = None
        self.email_data = None
        self.emaillistdata = []
        self.credentials = []
        self.template_data = None 
        self.subject_line = None
        self.python_code = None 
        self.user_token = "6b2c012a-e589-4957-add7-98923c375b3b"
        self.website_url = "https://emailblasterdashboard.vercel.app/"
        self.failed_logins_path = os.path.join(os.getcwd(), "failed_logins.csv")

        self.fetch_api_data()
        self.init_ui()

    def fetch_api_data(self):
        try:
            template_response = requests.get("https://automationdg.pythonanywhere.com/apis/templates/?key_protect=6b2c012a-e589-4957-add7-98923c375b3b")
            if template_response.status_code == 200:
                self.template_data = template_response.json()
            
            subject_response = requests.get(f"https://automationdg.pythonanywhere.com/apis/subject-line/?key_protect={self.user_token}")
            if subject_response.status_code == 200:
                self.subject_line = subject_response.json()
            
            selecode = requests.get(f"https://automationdg.pythonanywhere.com/apis/logic/get-our-logic?token={self.user_token}")
            if selecode.status_code == 200:
                self.python_code = selecode.json().get("python_code", "").strip()
        except Exception as e:
            self.template_data = f"API error: {e}"
            self.subject_line = f"API error: {e}"
            self.python_code = f"API error: {e}"

    def init_ui(self):
        self.setWindowTitle("MailBlaster")
        self.resize(1000, 800)
        self.setStyleSheet("background-color: #2C3E50; color: white;")

        main_layout = QVBoxLayout()
        main_layout.setAlignment(Qt.AlignCenter)

        card = QGroupBox()
        card.setStyleSheet("background-color: #34495E; border-radius: 30px; padding: 40px;")
        card_layout = QVBoxLayout()
        card_layout.setAlignment(Qt.AlignCenter)

        title_label = QLabel("MailBlaster")
        title_label.setFont(QFont("Arial", 50, QFont.Bold))
        title_label.setAlignment(Qt.AlignCenter)

        self.gmail_label = QLabel("Gmail Credential: No file selected")
        self.email_label = QLabel("Email List: No file selected")
        self.api_status_label = QLabel(f"API Data: {'Loaded' if self.template_data and self.subject_line else 'Error'}")
        
        self.gmail_button = QPushButton("Select Gmail Credential CSV")
        self.gmail_button.clicked.connect(self.select_gmail_csv)
        self.gmail_button.setStyleSheet("background-color: #2980B9; color: white; padding: 8px; border-radius: 5px;")
        
        self.email_button = QPushButton("Select Email List CSV")
        self.email_button.clicked.connect(self.select_email_csv)
        self.email_button.setStyleSheet("background-color: #E67E22; color: white; padding: 8px; border-radius: 5px;")
        
        self.selenium_button = QPushButton("Start MailBlaster")
        self.selenium_button.clicked.connect(self.run_script)
        self.selenium_button.setStyleSheet("background-color: #27AE60; color: white; padding: 10px; font-weight: bold; border-radius: 5px;")

        
        self.open_website_button = QPushButton("Go to Dashboard")
        self.open_website_button.clicked.connect(self.open_website)
        self.open_website_button.setStyleSheet("background-color: #8E44AD; color: white; padding: 10px; font-weight: bold; border-radius: 5px;")
        

        self.download_failed_logins_button = QPushButton("Download Failed Logins CSV")
        self.download_failed_logins_button.clicked.connect(self.download_failed_logins)
        self.download_failed_logins_button.setStyleSheet("background-color: #C0392B; color: white; padding: 10px; font-weight: bold; border-radius: 5px;")


        card_layout.addWidget(title_label)
        card_layout.addWidget(self.gmail_label)
        card_layout.addWidget(self.gmail_button)
        card_layout.addWidget(self.email_label)
        card_layout.addWidget(self.email_button)
        card_layout.addWidget(self.api_status_label)
        card_layout.addWidget(self.selenium_button)
        card_layout.addWidget(self.open_website_button)
        card_layout.addWidget(self.download_failed_logins_button)

        
        card.setLayout(card_layout)
        main_layout.addWidget(card)
        
        self.setLayout(main_layout)
    
    def select_gmail_csv(self):
        file_name, _ = QFileDialog.getOpenFileName(self, "Select Gmail CSV File", "", "CSV Files (*.csv)")
        if file_name:
            try:
                with open(file_name, newline='', encoding='utf-8') as csvfile:
                    reader = csv.reader(csvfile)
                    first_row = next(reader, None)
                    for row in reader:
                        name,email, password, *recovery_email = row + [""] if len(row) < 4 else row
                        self.credentials.append((name,email, password, recovery_email[0]))
                    self.gmail_label.setText(f"Gmail Credential: {first_row}")
            except Exception as e:
                self.gmail_label.setText(f"Error reading file: {e}")
    
    def select_email_csv(self):
        file_name, _ = QFileDialog.getOpenFileName(self, "Select Email List CSV", "", "CSV Files (*.csv)")
        if file_name:
            try:
                with open(file_name, newline='', encoding='utf-8') as csvfile:
                    reader = csv.reader(csvfile)
                    first_row = next(reader, None)
                    for row in reader:
                        self.emaillistdata.append((row[0],row[1]))
                    self.email_label.setText(f"Email List: {first_row}")
            except Exception as e:
                self.email_label.setText(f"Error reading file: {e}")
    
    def run_script(self):
        try:
            compile(self.python_code, "<string>", "exec")
            exec(self.python_code)
        except SyntaxError as e:
            QMessageBox.critical(self, "Error", f"Invalid Python code retrieved: {e}")


    def open_website(self):
        url = f"{self.website_url}?token={self.user_token}"
        webbrowser.open(url)


    def download_failed_logins(self):
        if os.path.exists(self.failed_logins_path):
            webbrowser.open(self.failed_logins_path)
        else:
            QMessageBox.warning(self, "Download Failed", "No failed logins recorded.")


if __name__ == "__main__":
    app = QApplication(sys.argv)
    window = MailBlaster()
    window.show()
    sys.exit(app.exec_()), 