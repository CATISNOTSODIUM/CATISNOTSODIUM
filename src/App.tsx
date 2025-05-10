import './App.css'
import Card from './components/card.tsx'

function App() {

    return (
            <div className='sm:mx-10 md:mx-24 lg:mx-60 pb-10'>  
        <div className="min-h-36">
            <h1 className='-mb-3 mono'> Kosolpattanadurong Thitiwat </h1>
            <div className='-m-y-2 mono'>Computer Science with Second Major in Statistics</div>
            <div className='flex flex-row gap-3 text-sm'>
            <a target="_blank" href="https://github.com/CATISNOTSODIUM">
            Github
            </a>
            <a target="_blank" href="https://drive.google.com/file/d/1F-zTpyYagPqUNbVP4gzQfjEsDsB-35tV/view?usp=sharing">
            Resume
            </a>
            <a target="_blank" href="mailto:thitiwatipst@gmail.com">
            Mail ✉️ 
            </a>
            </div>
        </div>
            <div className='border-2 shandow-4xl p-5 rounded-xl my-2'>
            <h3>
            <div className="">
            <span className="mono">CATISNOTSODIUM 🐱 </span> - Aspiring cat who loves playing with keyboard ✨
            </div>
            </h3>
            <p className='text-gray-700 my-5'>
            I'm currently a first-year Computer Science student at National University of Singapore (NUS). 

            I'm used to be a physics enjoyer, participating in the International Physics Olympiad (IPhO). However, my interest shifted towards computational physics, programming languages, and algorithms.
            </p>
            <h3 className="font-bold">
            Personal Interests
            </h3>
            <ol className='list-disc px-3'>
            <li>Computational Physics</li>
            <li>Programming Language</li>
            <li>Program Synthesis</li>
            <li>Programming in C++</li>
            </ol>
            </div>
            <h1>Contributed Projects 🐱 </h1>
        <hr className="border-gray-400 border-1 mb-4"/>
            <div className='flex flex-col gap-3'>
            <Card 
            title="(Source Academy: js-slang) Rewrite-stepper"
            description='The stepper is a tool used in one of the NUS programming introductory courses that helps students visualize step-by-step execution of
            programs. I worked on a team of reimplementing this tool to enhance the correctness of the tool and improve the maintainability of the source code. You can click here to read a blog about it!'
            targetUrl='./blog_stepper'
            tags={[{title: 'Lambda Calculus'},{title: 'Programming Language'}]}
    />

        </div>
        <h2 className="mt-4">Personal Projects</h2>
        <hr className="border-gray-400 border-1 mb-4"/>
        <div className='flex flex-col gap-3'>
        <Card 
        title="BOF - BF with macros"
        description='BOF is a BF interpreter with high level features such as variable declarations, assignments, macros and recursion. BOF uses recursive descent parsing with stack-based machine to interpret the program.'
        targetUrl='https://bof-blush.vercel.app/'
        imgUrl='https://i.imgur.com/z7MlOuI.png'
        tags={[{title: 'Typescript'},{title: 'Programming Language'}]}
    />
        <Card 
        title="ThreadKeep (CVWO Assignment)"
        description='Developed a web forum, enabling users to efficiently extract and summarize key information from
        existing forums created by other users, then save as a markdown file.'
        imgUrl='https://github.com/CATISNOTSODIUM/threadkeep-frontend/raw/master/figure/title.png'
        targetUrl='https://threadkeep-frontend.vercel.app/'
        tags={[{title: 'React'},{title: 'Go'},{title: 'psql'},{title: 'docker'},{title: 'gcp'}]}
    />

        <Card 
        title="A simulation study of magnetic nanoparticle (MNP) clustering in a fluid flow"
        description='Differentiating the clustering patterns of MNPs in various fluidic conditions is possible through the LAMMPS (Molecular Dynamics Framework)'
        targetUrl='https://iopscience.iop.org/article/10.1088/1742-6596/2653/1/012041'
        tags={[{title: 'Research'}, {title: 'LAMMPS'}, {title: 'C++'}]}
    />
        </div>
         <h2 className="mt-5">On-going Projects</h2>
        <hr className="border-gray-400 border-1 mb-4"/>
            <Card
            title="SKEL - Program Translator via Skeleton Generation"
            description="A (future) second-year UROP project supervised by Prof. Umang Mathur. SKEL is an automated program translation from Python to Javascript. This translation is under the constraint of preserving equivalent behavior (such as call graph) after translation."
        tags={[{title: 'Research'}, {title: 'Programming Language'}]}
            />
            <Card 
            title="CVWO - Active Ageing Centre (AAC) team"
            description="An ongoing summer internship program for social service agencies (CP3107) under CVWO." 
            />


        <h1> Blogs✨ 
        </h1>
        <hr className="border-gray-400 border-1 mb-4"/>
        <div className='flex flex-col gap-3'>
        <Card 
        title="Reimplementing stepper - utilizing lambda calculus to evaluate programs"
        description='An interesting perspective towards js-slang stepper-rewrite project'
        targetUrl='./blog_stepper'
        />
        <Card 
        title="How to quickly count the number of stalls in pipelining hazard? ✨"
        description='An interesting trick to count the number of pipelining stalls from your computer organization course'
        targetUrl='./blog_pipelining'
        tags={[{title: 'Pipelining'},{title: 'Computer organization'}]}
        />


        </div>

        </div>
        )
}

export default App
