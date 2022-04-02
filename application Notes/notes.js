/**
 # React
   - React is a javascript library to build user interfaces.
   - Reactjs is a client side javascript library.
 */

// React Basic
/**
 # React Component
   - Why components
     - Reusability - Don't repeat yourself
     - Separation of concerns - Make small saperate unit for easy access

 # React Components
   - HTML, CSS and JavaScript combine to make the react component
   - React allows you to create re usable and reactive components consisting of 
                      HTML    CSS   JavaScript 
                      |       |        |
                      |_______+________|
                              |
                            React
 # Create react Project
   - npm create-react-app hello-react
   - cd hello-react
   - npm start to start the application

  # JSX Code
   - JSX stands for JavaScript XML

  # How React Works

  # Component in React
    - A component in react is just a JavaScript function.
    - A special kind of function which rerturns the JSX code.

  # Using custom created component in other compoenent.
    - Define the compoenent and export that component in other module.
    - When using the component in html remember that 
                  the lower case always used with inbuild tags i.e., div,h1,h2
                  the Upper case always used with the user defined tags i.e., ExpenseItem,Expense

  # Use React Component
    - Create a functional component.
    - return some jsx from the component
    - import in the component which it is going to render or use.
    - then use it in the component jsx
    - Remeber that react compoenent only return one root element per return statement.

  # Adding styling
    - Create a saperate css class with the same name as the component with .css extension.
    - import that css file into the js component and use the className to assign the class.

  # Outputting Dynamic data
    - React give us the special thing about the {} to import dynamic data inside it.
    - <h1>{data}</h1> // let data = 'Hari'
    - Here while in runtime the data variable will be replaced with Hari in runtime

  # Outputting Dynamic data - Props
    - Props simply stands for properties. we can set properties of our own custom components.
    - simply pass the value as the argument of the input component and then receive it in the form of object from props.

  # props.children
    - children is an special or reserved keyword to pass all the data inside the opening and closing tag of an element/component

  # Modern react project vs older react project
      ------ Modern --------
      return(
        <div>
          <h2>Let's get started!</h2>
          <Expenses items={expenses}/>
        </div>
      )

      ----- Older -------
      return React.createElement('div',{},
        React.createElement('h2',{},{let's get started})
        React.createElement(Expenses,{items:expenses})
      )

    - see the underlying difference b/w writting the older version with React and new version using jsx.
 */

// Working with state and events
/**
  # React events
    - In all html element in jsx we have access to all the native dom elements which we can listen to.
    - We have the html equivalent event listner in dom which we can have access to all the elements.
    - we can use the event listner props starting with 'on' (i.e., onClick ={()=>{console.log('Hello i am clicked')}})
    - Imp Note
       - const clickCall = () =>{ console.log('Hi Button is clicked') }
       - onClick ={()=>{clickCall}}     // write approach
       - onClick ={()=>{clickCall()}}   // wrong approach the function executed when the code will compile

  # React useState
    - React keeps on calling the JSX only once while executing Since our component is just a function which we are using in JSX.
    - We need to useState hook to tell react hey some data is changed and you need to refresh the component when value in useState changes.
    - useState is the function provided by react library and this function allow us to define the value as states.
    - useState is termed as --- React hook ---
    - Hooks always called inside the function component only. not to be called outside the function or not be called in nested function.
    - useState whant a default value to initialize.
    - useState return and array where the first element is its value itself and the second element in the array is its updating function.
    - We can use a modern javascript methord termed as array destructuring to get both value in useState to store both value in varaible and constant.
    - useState always returns the array with 2 elements. example are given below
    -                const [title,useTitle] = useState(props.title);
                              |      |                    |
                    Accessing value  |                 default value
                                     |
                               methord to set the value

    - when the component is called 4 times. useState will create  4 state align to saperate component which is independent of each other.

  # Getting User Inputs
    - Inputs can we taken from the field using events and on change listner
    - onChange = {(event)=>{console.log(`--> ${event.target.value}`)}}   // example

  # Working with different state in one state (One state approach)
    - Use the useState function to pass as an object
    - const [userInput, setUserInput] = useState({
        enteredtitle: "",
        enteredAmount: "",
        enteredDate: "",
      });

    - Update state using the spreac operator
       setUserInput({
          ...userInput,
          enteredDate: event.target.value,
        });

    - In this condition we are depedning on the previous state to update the next state
    - Instead of using the above approach to update use the below setUserInput.(More conviniant approach)

        setUserInput((prevState) => {
          return { ...prevState, enteredtitle: event.target.value };
        });

    - You can use any approach single state approach or multistate approach all those things working fine.

  # Working with the click on submit of a form
    - When we click on add expense button form automatically have a onSubmit event handler that calls on form control.
    - But when we click the form is submitted and the browser automatically refereshed (default browser behaviour) // - issue
    - we can restrict the default browser behaviour using the event.preventDefault();

  # Adding two way binding
    - two want binding is for inputs we can listen to events as well as put a new value back to the input.
    - we can write the value to the inputs using | value ={} |

  # Child to parent binding (Imp)
    - Previously we learn how we can pass the data from child to parent.
    - In this we learn how to pass data up - from child to parents.

 */
