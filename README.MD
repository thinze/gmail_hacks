# GMail Hacks
Custom Javascript / styles to add some features to GMail.

# Features
**General**
- switch position of the answer dialog above the received email


-----

# Requirements
You have to install the TamperMonkey browser addon to add custom script to the GMail website.

I recommend Tampermonkey:
* [Tampermonkey for Chrome](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
* [Tampermonkey for Opera](https://addons.opera.com/de/extensions/details/tampermonkey-beta/)
* [Tampermonkey for Firefox](https://addons.mozilla.org/de/firefox/addon/tampermonkey/)

# Get started
In this tutorial I use "TM" as shortcut for the word "Tampermonkey".

1. **Install the addon**  
Click on the link above and install TM to your favorit browser. After that you see the TM-Icon right top.

2. **Add a new script**  
Right-click on that new icon in your browser and click on "Create a new script".  
![pic1](https://c1.staticflickr.com/8/7844/46390822204_603ee56e06.jpg)

3. **Copy source code**  
All the script logic is placed in one single file. Your find it here in this repository.
You have to copy the source code by use the Edit - button and put it into the new created script inside TM.

4. **Save and test it**  
Save the copied code inside TM with the shortcut CTRL+S or via TM-menu "File - Save to disk".
Now call the DIM website to see if it works.

[Call the GMail webpage to test](https://gmail.google.com/mail)

# Final
Now, after any reload GMail, the script will be executed automatically.