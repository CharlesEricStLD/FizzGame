//JS script i wich I stored my personalised function//

//Function to Add node to the DOM//
const AddNodeToDOM = (nodeToCreate, nodeToAppendTo, index) => {
    let nodeCreated = document.createElement(nodeToCreate);
    
//Check if the element created is not unique//
let ithNode = document.querySelectorAll(nodeToCreate)

if (index !== undefined) {
    if (ithNode.length > 1 && index > 0)
    {
        const ithNodeIndex = ithNode[(ithNode.length-1)];
        ithNodeIndex.appendChild(nodeCreated);
    }
}  
else {
    nodeToAppendTo.appendChild(nodeCreated);
}
return nodeCreated;
}

 //Function to style node element on the page with JS accepting an object of style//
const styleNode = (nodeToStyle,properties) => {
    const listOfStyles = Object.entries(properties);    
    listOfStyles.forEach(property => {
                let styleProperty =  property[0];
                let propertyValue =  property[1];
                nodeToStyle.style[styleProperty] = propertyValue;
});
}
