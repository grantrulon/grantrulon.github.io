import { Link } from 'react-router-dom';

function Projects() {
    return (
        <div className="text-white mt-10 flex flex-col m-10 px-20">
            <h1 className='font-bold text-2xl text-orange-200'>Personal Projects:</h1>
            <ul className="flex flex-col list-disc m-5">
                <li className='hover:text-orange-700 underline'>
                    <Link to='/projects/sem1'>Sem1</Link>
                </li>
                <li className='hover:text-orange-700 underline'>
                    <Link to='/projects/sem1'>Sem1</Link>
                </li>
                <li className='hover:text-orange-700 underline'>
                    <Link to='/projects/sem1'>Sem1</Link>
                </li>
            </ul>

            <h1 className='font-bold text-2xl text-orange-200'>Coursework Projects:</h1>
            <ul className='flex flex-col list-disc m-5'>
                <li className='hover:text-orange-700 underline'>
                    <Link to='/projects/prog-concepts'>Programming Concepts</Link>
                </li>
                <li className='hover:text-orange-700 underline'>
                    <Link to='/projects/prog-concepts'>Data Structures</Link>
                </li>
            </ul>
        </div>
    );
}

export default Projects;