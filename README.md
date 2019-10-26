# Eat Da Burger

Eat Da Burger is an app you can use to keep track of burgers which you have and haven't eaten. The left side of the screen lists burgers yet to be eaten. To the right are burgers which have been eaten. And in the center is a field you can use to add your own burgers!

To add a new burger, enter the name of your burger in the text box in the center of the screen. Click the submit button and the form will trigger a call via ajax to our mysql database and then refresh the page. You will see the burger appear at the bottom of the list on the lefthand side of the screen.

Any burgers which have been added can be marked as devoured by clicking the blue devoured button to the right of each burger. Clicking this button will target which burger is being devoured by id and then change its devoured status in the database from false to true.

One a burger has been devoured (as soon as its devoured value is set to true) it will populate on the right side of the screen when the express handlebars template flags its devoured status. This list will persist and you can keep tabs on all the burgers you have consumed.