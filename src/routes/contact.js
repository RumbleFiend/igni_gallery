import React, { useState } from 'react';
import '../assets/styles/contact.css';

const Contact = () => {
    const [fname, setFname] = useState("");
    return (
        <div class="container">
        <form action="action_page.php">
      
          <label forHtml="fname">Nom</label>
          <input type="text" id="fname" name="firstname" placeholder="Votre nom.." />
      
          <label forHtml="lname">Prénom</label>
          <input type="text" id="lname" name="lastname" placeholder="Votre prénom.." />
      
          <label forHtml="country">Pays</label>
          <select id="country" name="country">
            <option value="algeria">Algerie</option>
            <option value="france">France</option>
            <option value="australia">Australie</option>
            <option value="canada">Canada</option>
            <option value="usa">USA</option>
          </select>
      
          <label forHtml="subject">Sujet</label>
          <textarea id="subject" name="subject" placeholder="Write something.." style={{height:'200px'}}></textarea>
      
          <input type="submit" value="Enovyer" />
      
        </form>
      </div> 
    )
}

export default Contact;