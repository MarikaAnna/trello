# trello project
Install or make sure you have [node.js](https://nodejs.org/en/) .
Install or make sure you have [git](https://git-scm.com/downloads) .

Clone a repository:
* Go to the [GitHub Project](https://github.com/MarikaAnna/trello)
* Under the repository name, click Clone or download.
* In the Clone with HTTPs section copy the clone URL for the repository.
* Open Terminal.
* Change the current working directory to the location where you want the cloned directory to be made.
* Type git clone, and then paste the URL you copied in Step 2. --> git clone https://github.com/MarikaAnna/trello.git
* Press enter.

Then install necessary packages:
* npm install -g testcafe
* npm install --save-dev faker

Go to the project folder:
* cd trello
* git pull
* [for macOS] probably you will need to also do: source ~/.bashrc

And run the tests:
[you can use any browser that you like. For MacOS I recommend chromium]
* testcafe chromium suites/ 
* testcafe chrome suites/

Read the report in the terminal
