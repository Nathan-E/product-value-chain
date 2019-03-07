# product-value-chain
The application mimics the life cycle of a Product through a value chain as shown below
            Producer ==> Retailer ==> Consumer ==> Recycler 
            (then back to the producer, the chain continues)

To run this application, execute the following command inorder:
npm start
To run the test cases, executes the command below:
npm test


NB: The activity of the app is logged to the console and to the output.txt file in the data folder.


In the home directory, 

# States: 
This folder habours files of the classes a of each State(Producer, Retailer, Consumer, Recycler) with the test cases.

# data: 
This folder contain the input.txt file(which contains an initial actions for each state) and the output.txt(which contains an final actions for each state).

# monitor: 
This contains a monitor.js file that habours a global variable used to stop the application a runtime.

# product_cycler: 
This is an Adapter class for the Classes of the States in the value chain and the runner.js file in the processor folder.

# state_factory: 
This folder contains state_factory.js file that implements chain of responsibility pattern. It give the product coming from the input file to the appropriate State at runtime.

# processor: 
This container two files, the runner and the loader.js. The loader.js file is used to solve the circular dependency between the States. it preload all the Classes immediately the application start running. The runner folder contains runner.js file that acts as an adpater function between the product_cycler class and the read function in the app.js file.

# __mocks__: 
This contains fs.js file used to mock node JS fs module.

# app.js:
This is the entry point of the program. 

# Product Flow
1. When the app.js is ran, the read function reads the input file, used regex to remove impunities.
2. Each cleaned line represents a state of the a unique product(Producer, Retailer, Consumer or Recycler ).
NB: Some of the products are without a state.
3. Each product with a unique ID, state and url is passed to the run function in the processor/runner/ file.
NB: The run function made used of default parameter by setting the State of products without State to 'Producer'.
NB: The url is the file path to the output.txt file.
4. The product and its State is then passed to the product_cycler function in the product_cycler/ folder, where the state_factory function is called to provide the unique class of the State for the product at runtime.
5. Then the start method of the product_cycler is called which start the real time change of State of the unique product, as that happens, the activity is logged to the console and also to the output.txt file in real time
