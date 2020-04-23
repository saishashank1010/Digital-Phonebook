# Digital-Phonebook

The application has the following views
 1. Initially, when we run the application we can see the view of all the contacts we have. Here we have the option to check the details of all contacts in one go.
 Additionally we can also edit or delete any of the contacts.
 2. When we click edit button in any of the contacts, we go to edit view where we have the option to change the details of the contacts and save them. Once we 
 are back to the contact list view we can see the changes in effect.
 3. In the contact list we we can notic a navigation bar at the top with options for contact list and add contacts. Since we are in the contact list view by 
 default click on add contacts. In this view we can see all the possible fields for a contact, fill up all the fields with appropriate values and click add button.
 Once we are back to the contact list view we can see the new contact added at the bottom of the list.
 
 The organization and folder structure of the application is as follows
   Under the app folder we can find the various components. We have created components for contact-list, contact-model(add contact view), edit-contact. Also we
  have utilized contact-info service for fetching and posting the contact details along with in-memory data service for the details. The contact interface was 
  also used to define what a basic unit of contact data should contain. The app routing module was for routing to vaious views smoothly.
  