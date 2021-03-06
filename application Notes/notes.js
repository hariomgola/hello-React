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

    - Create a function in parent component
        const onSaveExpenseDataHandler = (eneteredExpenseData) => {
          const expenseData = {
            ...eneteredExpenseData,
            id: Math.random().toString(),
          };
          console.log("NewExpense Parent Component ----->", expenseData);
        };

    - Pass the function as a props to child component
        <ExpeseForm onSaveExpenseData={onSaveExpenseDataHandler} />

    - Use the props to pass the value as a function paramater.
        props.onSaveExpenseData(expenseData)  // expenseData is any data

    - You can see that console is printed from parent component but its used in child component.
    - That's how we can pass data from child component and parent component and manulpate according to the needs.

  # Lifting the stateup
    -                        <App/>
             <Expenses/>              <NewExpense/>
            (Data needed)             (Generate Data)
    
    - We don't have any connection between NewExpense Component and Expenses component.
    - Here we utilize the closest paren't component which has direct or indirect access to both these component. (<App/>)  
    - We can first pass the data from <NewExpense/> to <App/> using props and passing the same to <Expenses/> using props.

  # Controlled va un-controlled component
    - controlled component are the component in which the data ia being passed either from props or any other factor.
    - uncontrolled components are the components which don't maintain any state.
    - While the controlled components are the components which maintain  the state internally.
  
 */

// Rendering list and conditional components
/**
  # Rendering list Data
    - {} we need single curly braces for this beacause we want to execute the dynamic expression in the code.
    - { props.expenses.map(expense => <ExpenseItem 
                                        title = expense.title
                                        amount = expense.amount
                                        date = expense.date />) }

  # Understanding key in Dynamic list randering
    - React has a special concept when it comes to rendering list of data. Without performance losses or bugs.
    - without using key react will add the next list item at last and refreshes the full list.
    - React will refreshes all the elements in the list and refreshes.
    - With the help of key we can tell the react to identify the particular set of element and only add or refreshes that element.

  # Output conditional component
    - We can use the turnary opertor in {}
    - {filterExpenses.length === 0 ? <p> No Expenses found </p> : ( // our custom component )}
    - we can also use single operator in turnary function using && operator
    - {filterExpenses.length === 0  && <p> No Expenses found </p> }
    - {filterExpenses.length > 0  && ( //our custom component ) }

    - Instead of doing the above approach we can also use the approach in our js code
    -  let expensesContent = <p>No expense found.</p>
       if(filterExpenses.length > 0){
         expenseContent = filterExpenses.map((expense)=>(
           <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
         ))
       }

 */

// Styling React Component
/**
  # Styling React Component
    - Coditional and Dynamic way
    - Two popular approach for scoping style in component
         - Styled components (library)
         - CSS Modules (Approach)
  
  # Setting Dynamic Styling - Inline Style -
    - Using a conditional
    - style = {{color: !isValid ? 'red' : 'black'}} // change color
    - style = {{borderColor: !isValid ? 'red' : 'black', background : !isValid ? 'red' : 'transparent'}} // changing bordercolor
    // use camelCase in javascript file instead of simple bordercolor

  # Setting Dynamic style - Using Dynamic css clases - 
    - using a conditional statement in className
    - Conditions  | .form-controls inputs{} | .form-controls.invalid inputs {} |
    - className = {`form-control ${!isValid ? 'invalid' : ''}`}

  # Introduction to Styled Components
    - URL - https://styled-components.com/
    - Styled components are the package which help in building styles listed to into particular component.
    - npm install --save styled-components
           import styled from 'styles-components'
           const Button = styles.button`
             // directly paste style over here
             &:focus // to use the sudo selectors
             @media (min -width : 768px){
               width: auto;
             } 
           `;

  # Styling using CSS Modules (Scoped Styles)
    - URL - https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/
    - Css modules are the features available to the modules which are only available to support it.
    - Name the simple css class to   Button.css -> Button.module.css
    - import styles from './Button.module.css'
    - While usng this approach we can get all css classes as a object in style and then we can assign whatever we want to apply.
    - For example className = {style.button} 

  # Dynamic style Using CSS Modules
    - <div className = { `${styles['form-control']} ${!isvalid && styles.invalid}`} >
 */

// Debugging React Error
/**
  # React Dev Tools
    - you can find the react dev tool on chrome we store.
 */

// Fragments,Portals & Refs
/**
  # JSX Limitation
    - JSX only returns one root element only.

  # Overcome JSX limitation by wrapper function
    - const wrapper = (props) =>{
      return props.children;
    } 
  
  # Fragments
    - <React.Fragment></React.Fragment>   or  <></>
    - Will Add empty wrapper to the JSX code.

  # Portals
    - Portals is used to keep the structure of an html page
    - Example our component is nested with n component and in deep of the application. We want to show some popup of something to main div.
    - In the above condition portals come into play. Where we need to show something to direct child of the body.
    - Portals need two thing
        ~ Place where you wana port the component to
        ~ Then you need to let the component know that it should have a portal to that place.
        
    - In app.js   <div id="backdrop-root"></div>  | <div id="overlay-root"></div>

    - const BackDrop = (props) => { return <div className={classes.backdrop} onClick={props.onConfirm} />}
    - const ModalOverlay = (props) => { // JSX code }

    - After spliting the component into 2 parts backdrop and modalOverlay
    - For using Portals we can use the ReactDOM which is find in 'react-dom' library.
    - import ReactDOM from 'react-dom'

    - We can use ReactDOM.createPortal() and it takes 2 arguments. 
    - first one is react node and second arument is the contained to which real dom is rendered.
    - {ReactDOM.createPortal(  <Backdrop onClick={props.onConfirm}/>, document.getElementById('backdrop-root')  )}

  # refs (references)
    - useRef is the react hook. They allow us to access other DOM element and work with them.
    - useRef takes the defalt valua and return a value which allow us to work with that value or element which we are going to wrok on it.
    - We have to tell react that we need to use the element by using and special props which is 'ref' props

       const nameInputRef = useRef()
       <input type="text"
        ref = {nameInputref} />
    - Ref always generate the object which always has the current hold the actual value of which ref is connected with.
    - Its stored the actual DOM node which it is connected to and you can manipulate according to your needs.
    - console.log(nameInputRef.current.value) // returns the actual value
    - const enteredName = nameInputref.current.value;

    // reset the value after submit
    nameInputref.current.value = ''

    - Insted of reading value on every key stroke press we can use ref

  # Controlled vs UnControlled Components
    - uncontrolled components are the component whose value is not controlled by react we need to use the default behaviour to the html elements.
    - Controlled components are the components which value can be controlled with the help of react concepts such as useState

 */

// Handling Side Effect, Using Reducers & Using the Context API
/**

 */
 