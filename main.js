function iconaclickata(nomeapp){

    if(nomeapp === "instagram"){
        console.log("premuto insta");

        // Create a new section element
        
        // Get a reference to the existing section
        var privacySection = document.getElementById('privacy');
        
        var paragraph = privacySection.querySelector('p');
        var icone = privacySection.querySelector('button')
        
        var paragraphText = paragraph.textContent;
        
        console.log(paragraphText);
        
        paragraph.textContent = 'This is the content of the Instagram.'; // Use textContent to update the text
                    
        
        // Insert the new section before the existing section
        // privacySection.parentNode.insertBefore(instaSection, privacySection);

    }else if(nomeapp === "whatsapp"){
        console.log("premuto whatsapp"); 
        
        // Get a reference to the existing section
        var privacySection = document.getElementById('privacy');
        
        var paragraph = privacySection.querySelector('p');
        
        var paragraphText = paragraph.textContent;
        
        console.log(paragraphText);
        
        paragraph.textContent = 'This is the content of the whatsapp.'; // Use textContent to update the text
        
    }else if(nomeapp === "facebook"){
        console.log("premuto facebook");    
        
        // Get a reference to the existing section
        var privacySection = document.getElementById('privacy');
        
        var paragraph = privacySection.querySelector('p');
        
        var paragraphText = paragraph.textContent;
        
        console.log(paragraphText);
        
        paragraph.textContent = 'This is the content of the facebook.'; // Use textContent to update the text
        
    }else if(nomeapp === "tiktok"){
        console.log("premuto tiktok");    
          
        // Get a reference to the existing section
        var privacySection = document.getElementById('privacy');
        
        var paragraph = privacySection.querySelector('p');
        
        var paragraphText = paragraph.textContent;
        
        console.log(paragraphText);
        
        paragraph.textContent = 'This is the content of the tiktok.'; // Use textContent to update the text
        
    }
}