const { type } = require('os');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function student_dict(student_data,Student,mathgrade,sciencegrade,englishgrade,filipinograde,pegrade){
  
  student_data[Student]=[{"Mathematics":mathgrade},
      {"Science":sciencegrade},
      {"English":englishgrade},
      {"Filipino":filipinograde},
      {"PE":pegrade}]
    console.log(`New Studnet " ${Student} Added Succesfully"`)
    console.log(student_data)
    
};
    



function student_input(student_data,studentname,mathgrade,sciencegrade,englishgrade,filipinograde,pegrade){
    rl.question("Enter Student name:", (name) => {
    rl.question("Enter Mathematics Grade:", (grademath) => {
        rl.question("Enter Science Grade:", (gradescience) => {
            rl.question("Enter English Grade:", (gradeenglish) => {
                rl.question("Enter Filipino Grade:", (gradefilipino) => {
                    rl.question("Enter PE Grade:", (gradepe) => {
                        studentname = name;
                        
                        // Parse all grades to integers
                        mathgrade = parseInt(grademath);
                        sciencegrade = parseInt(gradescience);
                        englishgrade = parseInt(gradeenglish);
                        filipinograde = parseInt(gradefilipino);
                        pegrade = parseInt(gradepe);
                        
                        // Validate that all inputs are valid numbers
                        if (Number.isInteger(mathgrade)&&
                            Number.isInteger(sciencegrade)&& 
                            Number.isInteger(englishgrade)&&
                            Number.isInteger(filipinograde)&& 
                            Number.isInteger(pegrade)){
                            
                            student_dict(student_data, studentname, mathgrade, sciencegrade, englishgrade, filipinograde, pegrade);
                            rl.close();
                        } else {
                            console.log("Error: Please enter valid numbers for all grades");
                            rl.close();
                        }
                    });
                });
            });
        });
    });
  });
}


function student_list(){
      console.log("-==-=--==--=Student List-=-=-=--=")
      console.log("Student Name")
    }


function average_grade(student_data) {
}

function Search(){

}



let student_data={};
let studentname;
let mathgrade ;
let sciencegrade;
let englishgrade;
let filipinograde;
let pegrade;



looping = true;
console.log(`
    =-=-=-=-=-Student Analyzer-=-=-=-=-=
    
    =-=-=-=-=Menu-=-=-=-=
    1.Add Student
    2.Average Grade
    3.List Of Student
    4.Search Specific Student / Subject`)
rl.question("Enter choice :",(choice)=>{
      if (parseInt(choice)==1){
        student_input(student_data,studentname,mathgrade,sciencegrade,englishgrade,filipinograde,pegrade);
       
      }else if (parseInt(choice)== 2){
        average_grade(student_data);
      }
    });
  






  //  Add_student()
  // student_dict(student_data)
  // rl.question("enter",(name)=>{
  //   names= name;
  //   rl.close()
  // });
  // console.log(student_data)

 
