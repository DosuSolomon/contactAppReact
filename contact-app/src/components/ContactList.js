import React, {useRef} from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  console.log(props);
  const inputElement = useRef("");

  const deleteContactHandler = (id) => {
    props.getContactId(id);
  };

  
  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        clickHander={deleteContactHandler}
        key={contact.id}
      />
    );
  });

  const getSearchTerm = () => {
    props.searchKeyWord(inputElement.current.value);
  };
  return(
    <div className="main">
      <h2>
        Contact List
        <Link to="/add">
          <button className="ui button blue right" style={{ float: "right"}}>Add Contact</button>
        </Link>
      </h2>
      <div className="ui search">
        <div className="ui icon input" style={{width: "100%"}}>
          <input className="prompt"
          ref={inputElement} 
          type="text" 
          placeholder="Search Contacts"
          value={props.term}
          onChange={getSearchTerm}/>
          <i className="search icon"></i>
        </div>
      </div>
      <div className="ui celled list">{renderContactList.length>0 ? renderContactList: "No Contacts Available"}</div>
    </div>
  );
};

export default ContactList;
