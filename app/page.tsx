import NavigationBar from './home/navbar.jsx';
import UploadTemplate from './home/uploadtemplate.jsx';
import UploadSubject from './home/uploadsubjects.jsx';

export default function Home() {
  return (
    <div className='bg-gray-100 min-h-screen'>
      <NavigationBar />

      <div className='max-w-6xl mx-auto py-8 px-4'>
        <UploadTemplate />
      </div>

      <div className='max-w-6xl mx-auto py-8 px-4'>
        <UploadSubject />
      </div>

    </div>
  );
}
