<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DOM vs Virtual DOM</title>
</head>
<body>

    <h2>DOM vs Virtual DOM Example</h2>
    <button onclick="updateDOM()">Update using DOM</button>
    <button onclick="updateVirtualDOM()">Update using Virtual DOM</button>
    
    <div id="dom-container">Original Text (DOM)</div>
    <div id="virtual-dom-container">Original Text (Virtual DOM)</div>

    <script>
        // Traditional DOM Update (Direct Manipulation)
        function updateDOM() {
            document.getElementById("dom-container").innerText = "Updated using DOM!";
        }

        // Virtual DOM Simulation
        let virtualDOM = { text: "Original Text (Virtual DOM)" }; // Virtual representation
        
        function updateVirtualDOM() {
            const newVirtualDOM = { text: "Updated using Virtual DOM!" }; 
            
           
            if (virtualDOM.text !== newVirtualDOM.text) {
                virtualDOM = newVirtualDOM; 
                document.getElementById("virtual-dom-container").innerText = virtualDOM.text; 
            }
        }
    </script>

</body>
</html>
