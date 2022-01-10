const tasks = [
    {
        id: 1,
        text: "Meeting with the Directors",
        day: "8th Jan, 2022",
        reminder: true
    },

    {
        id: 2,
        text: "Doctor's Appointment",
        day: "10th Jan, 2022",
        reminder: true
    },

    {
        id: 3,
        text: "Follow up with my Managers",
        day: "12th Jan, 2022",
        reminder: true
    },

    {
        id: 4,
        text: "Saloon Appointment",
        day: "25th Jan, 2022",
        reminder: false
    },

];

function Tasks () {
    return (
        // JSX
        <>
            {
                // Write JS

                /*  
                    Iterate over Tasks Array/List, pick every object 
                    one by one and for every object you pick, print 
                    the value of "text" key 
                */

              
                // Learn the Higher Order Array Methods
                tasks.map((task) => (
                    <div>
                        <li key={task.id}> {task.text} </li>
                        {/* <h4> {task.day} </h4> */}
                    </div>
                ))
                
            }
        </>
    );
}

export default Tasks;