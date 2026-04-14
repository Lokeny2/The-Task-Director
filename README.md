    The Task Director
The Task Director is a task management application built to demonstrate mastery over the Document Object Model (DOM) and 
memory-efficient JavaScript patterns. This project focuses on high-performance interaction by using Event Delegation to 
manage tasks.

    Features
1.Dynamic Task Addition: Instantly add new missions to your list using the "Add Task" button or by simply pressing the Enter key.

2.Efficient Task Execution: Click on any task text to toggle its status. Completed tasks are visually struck through for clear 
progress tracking.

3.Precision Deletion: Remove individual tasks with a dedicated "Delete" button for each entry.

4.Mass Cleanup: A "Clear All" feature allows for a total reset of the director board.

5.Safety First: Includes a confirmation dialogue before clearing the entire list to prevent accidental data loss.

6.Responsive Design: A modern, centered interface that fits in to different screen sizes.

    Tech Stack
1.HTML5

2.CSS3:state-based styling (e.g., .completed class).

3.JavaScript 

    Lessons Learned
Building the Task Director provided several insights into software development:

1. The Power of Event Delegation
Instead of attaching a listener to every single "Delete" button, I learned to attach one listener to the parent list. This makes the
application much faster and ensures that new tasks added to the list work automatically without needing new listeners.

3. Debugging is a Discipline
During development, I encountered common real-world bugs, such as ID mismatches between the HTML and JavaScript and the difference
between passing a string versus a variable into a function. Solving these reinforced the importance of naming consistency.

4. User Experience (UX) Guardrails
I learned that "destructive" actions (like deleting everything) should always have a confirmation step. This protects the user and
makes the software feel more professional and "safe."

5. DOM Hierarchy
This project solidified my understanding of the DOM tree—specifically how to use parentElement and e.target to navigate between
elements to change their appearance or remove them entirely.

       How to Use
1.Open index.html in any modern web browser.

2.Type your task into the input field.

3.Press Enter or click Add Task.

4.Click the task text to mark it "Done."

Click Delete to remove a specific task or Clear All to start fresh.
