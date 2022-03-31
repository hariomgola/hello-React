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

 */
