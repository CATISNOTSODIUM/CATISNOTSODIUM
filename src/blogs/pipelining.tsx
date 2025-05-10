export default function Pipelining() {
    return (
            <div className='sm:mx-10 md:mx-24 lg:mx-60'>
            <a href='/'>{"< Go back"}</a>
            <h1>
            [CS2100] How to quickly count the number of stalls in pipelining hazard?
            </h1>
            <div className="flex flex-col gap-5">
<div>
Pipelining is one of the more challenging topics from my CS2100 computer organization course. While I'm not in favor of the exam design in this course, these tricks will definitely help you do the final exam a lot faster.
</div>

<div>
For a processor that supports pipelining with <span className="mono bg-red-100 p-1 rounded-md">k</span> stages, ideally, after executing <span className="mono bg-blue-100 p-1 rounded-md">N</span> instructions, the number of pipelining cycles is <span className="mono bg-green-100 p-1 rounded-md">N + k - 1</span>.
</div>
<h2>RAW dependency</h2>
<div>
However, if there is a Read-AND-WRITE (RAW) depency between two instructions (the latter instruction has to wait for the write-back of the first instruction to be finished), the processor has to waste extra-time in order to preserve the correctness of the program.
</div>
<div>
There are several techniques to mitigate this issue. You can either use forwarding and early branching to reduce the number of stalls. These details are already included in the course. 
</div>
<div>
In order to quickly identify the number of stalls, you first classify the stall type and the number of instructions in between. Next, you can use the chart to identify the number of stalls. Note that the number in the chart is considered based on the fact that two instructions are consecutive. The actual number of stalls have to be deducted by the number of instructions in between.
</div>
<img src="https://i.imgur.com/c9wDRDh.png" alt="pipelining"/>

<h2>Control Hazard</h2>
<img src="https://i.imgur.com/7Zj6S9u.png" alt="pipelining2"/>
            </div>
            </div>
           )
}
