//your JS code here. If required.
 const line = document.getElementById('line');

        // Rotation angle in degrees
        let angle = 0;

        // Function to rotate the line
        function rotateLine() {
            angle += 1;
            line.style.transform = `rotate(${angle}deg)`;

            // Call the rotateLine function again after a small delay
            requestAnimationFrame(rotateLine);
        }

        // Start the rotation
        rotateLine();