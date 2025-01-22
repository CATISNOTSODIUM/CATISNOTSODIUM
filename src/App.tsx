import './App.css'
import Card from './components/card'

function App() {

  return (
    <div className='sm:mx-10 md:mx-24 lg:mx-60'>  
      <h1 className='-mb-3'> Kosolpattanadurong Thitiwat </h1>
      <div className='-m-y-2'>Computer Science with Second Major in Statistics</div>
      <div className='flex flex-row gap-3 text-sm'>
        <a target="_blank" href="https://github.com/CATISNOTSODIUM">
          Github
        </a>
        <a target="_blank" href="https://drive.google.com/file/d/1hCd1fj0aSneGO4fxF52_LtNrP1i80Keo/view?usp=sharing">
            Resume
        </a>
        <a target="_blank" href="mailto:thitiwatipst@gmail.com">
          Mail ✉️ 
        </a>
      </div>
      <div className='border-2 shandow-4xl p-5 rounded-xl my-2'>
        <h3>
        CATISNOTSODIUM 🐱 - An aspiring cat who loves playing with keyboard ✨
        </h3>
        <p className='text-gray-700'>
          The infinite monkey theorem states that a monkey hitting keys at random on a typewriter keyboard for an infinite amount of time will almost surely type any given text. The infinite cat theorem prolly follows the same rule.
        </p>
        <h4>
          Personal Interest
        </h4>
        <ol className='list-disc px-3 text-sm'>
          <li>Web development</li>
          <li>Programming Language</li>
          <li>Stochastic Process</li>
        </ol>
      </div>
      <h2>Projects</h2>
      <div className='flex flex-col gap-3'>
        <Card 
          title="BOF - BF with macros"
          description='BOF is a BF interpreter with high level features such as variable declarations, assignments, macros and recursion. BOF uses recursive descent parsing with stack-based machine to interpret the program.'
          imgUrl='https://media.licdn.com/dms/image/v2/D5622AQF_mFoBB1sQgg/feedshare-shrink_800/feedshare-shrink_800/0/1731583222652?e=1740614400&v=beta&t=JBDUYCazDjYTN9FEvMsjJQ19Aoh2P6AyVnGiTKlbPGw'
          targetUrl='https://bof-blush.vercel.app/'
          tags={[{title: 'Typescript'},{title: 'Programming Language'}]}
      />
      <Card 
          title="PDFtoPPTX - A Responsive PDF to PPTX convertor"
          description='Developed a Python library for converting PDF documents to editable PowerPoint (.pptx) presentations while l pre-
serving original document structure and content editability within the generated PowerPoint.'
          imgUrl='https://github.com/Brendan8899/pdfTopptx/raw/master/title.png'
          targetUrl='https://devpost.com/software/pdftopptx?ref_content=user-portfolio'
          tags={[{title: 'Python'}]}
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
     
      <h2>Blogs</h2>
      <Card 
          title="(THAI) What are the best ways to maximize the reach of a post?"
          description='Maximizing engagement from post promotion can be really tricky, considering how vague the algorithm introduced by social media platform is. However, what if we purge all nuances from the algorithm? ...'
          imgUrl='https://scontent-sin6-4.xx.fbcdn.net/v/t39.30808-6/428676953_421213426961906_2763394665783370854_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Y8_RDB-kMtMQ7kNvgEr1MT1&_nc_zt=23&_nc_ht=scontent-sin6-4.xx&_nc_gid=A1kxJjFO_VOGrPqumDmhXAi&oh=00_AYDC8r-8TpTg9aOPmVIl0T_oIUW6RqqiSdS2dt2Oz52f1g&oe=679646E0'
          targetUrl='https://www.facebook.com/story.php?story_fbid=pfbid02b7BdW4Awqq1X7ajeJh3RasaN4LGnRYdAQhDcKR6DQykEYcc8Wdu7jBxEVb97o2r7l&id=100072197568983&_rdr'
          tags={[{title: 'Graph Theory'}]}
      />

      <Card 
          title="Implementing BOF - An unnecessary extension to Brainfuck (BF)"
          description='Delve into into how I implement BOF.'
          targetUrl='/blog_bof'
      />
    </div>
  )
}

export default App
