export default function BOF() {
    return (
        <div className='sm:mx-10 md:mx-24 lg:mx-60'>
            <a href='/'>{"< Go back"}</a>
            <h1>
                Reimplementing stepper - utilizing lambda calculus to evaluate programs
            </h1>
        <div className="flex flex-col gap-5">
            <div>
                Have you ever been in a situation where you have to teach students how to learn programming? One of the key aspects that make programming fun is to visualize what’s going on in a piece of program. A stepper solves this problem.
            </div>
            <div>
            The stepper is a tool that helps students visualize step-by-step execution of
programs. The stepper has been used in CS1101S, one of the introductory programming courses, and it’s been proven to be effective to students. The stepper uses the philosophy of keep reducing and substituting until you cannot do anything about the program. Here are some examples.
            </div>
            Simple expression
            <pre>
            {"3 + (4 * 7) -> 3 + 28 -> 31"}
            </pre>
            Constant declaration
            <pre>
            {"const x = 3; x + 1; ->\n"}
            {"4 + 1; -> \n"}
            {"5; (Terminate) \n"}
            </pre>
        <div>
However, things start to get a little bit tricky when we substitute function with recursion. The previous version eagerly substitutes functions with recursion which is not great and it’s very tricky to resolve in the previous version. Moreover, after substituting function declaration, the definition of the function is lost. For instance, consider the implementation of factorial.
        </div>
<pre>
    {"const fact = n => n === 1 ? 1 : n * fact(n - 1);\n"}
    </pre>
<div>
    What would happen if we call factorial of 5? 
    <pre>
    {"(n => n === 1 ? 1 : n * fact(n - 1))(5)\n"}
    </pre>
    You can clear see that even though function fact has already been substituted, there should be no fact left in the program, since we cannot recall the definition of fact later on after substitution.
</div>

    <div>
    One technique that we use is utilizing <b>mu term</b> to remember function definition after substitution.
    </div>
    To be continued ... 
        </div>
    </div>
    )
}
