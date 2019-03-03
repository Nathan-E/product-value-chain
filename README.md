# product-value-chain
The application mimics the life cycle of a Product through a value chain as shown below
            Producer ==> Retailer ==> Consumer ==> Recycler 
            (then back to the producer, the chain continues)

In the home directory, 

# participants: 
This folder habours files of the classes a of each Stages(Producer, Retailer, Consumer, Recycler) with the test cases.

# data: 
This folder contain the input.txt file(which contains an initial actions for each stage) and the output.txt(which contains an final actions for each stage).

# monitor: 
This contains a monitor.js file that habours a global variable used to stop the application a runtime.

# product_cycler: 
This is an Adapter class for the Classes of the Stages in the value chain and the runner.js file in the processor folder.

# state_factory: 
This folder contains state_factory.js file that implements chain of responsibility pattern. It give the product coming from the input file to the appropriate Stage at runtime.

# processor: 
This container two files, the runner and the loader.js. The loader.js file is used to solve the circular dependency between the Stages. it preload all the Classes immediately the application start running. The runner folder contains runner.js file that acts as an adpater function between the product_cycler class and the read function in the app.js file.

# __mocks__: 
This contains fs.js file used to mock node JS fs module.

# app.js:
This contains a f

# Product Flow
