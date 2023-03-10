# Reactjs Website Project



## Overview

This is a freelancing website model which was primarily designed for a client operating in event planning industry, with a particular focus on providing high-quality lighting services.

To create this website, I used several technologies including React, NodeJs and Cloudinary. These technologies were chosen for their ability to provide a fast, responsive user experience, as well as flexibility and scalability. I also incorporated Sass, several React tools and  React Lazy Loading to enhance the functionality and performance of the website.

In the following sections, I`ll dive deeper into the features and functionalities of the website, and provide instructions on how to use them. I hope you find this website to be valuable resource for your needs, and any feeback or questions are welcome.

## Gallery

## Navigation

The website consists of two pages: the **homepage** and the **gallery**. The **homepage** serves as a landing page that provides brief information about the client's services, including awards, reviews, partners, and contact details. To access the **gallery**, users must click on one of the available service options, which will redirect them to a page where they can view photos related to that service.

For mobile users, certain sections of the landing page are hidden and can only be accessed by using the dropdown menu.

## Getting Started

### Must know

* This website uses **npm** for installing and managing nodejs packages.
* Latest version of nodejs is recomended.
* I recommend using **nvm** to install **npm** and the latest version of **nodejs**. Check [here](https://github.com/nvm-sh/nvm).
* You need **git** installed. Check [here](https://git-scm.com/).
* You can use any IDE. I used Visual Studio Code ( vscode ).

### Installation

```bash
# Cloning project
git clone git@github.com:sillasbernardo/Reactjs-landing-page-template.git

# Enter folder
cd Reactjs-landing-page-template

# Execute start.cmd - Windows based OS
start.cmd

# Execute start.sh - Debian Linux based OS
./start.sh
```

The ***start*** script runs:

```bash
# For windows based OS
# --------------------

# Install dependencies if needed
npm install
# Open another instance of cmd, enter /api folder and start npm server
start cmd /k "cd api && npm start"
# Start npm server on current folder
npm start

# For Debian linux based OS
#--------------------------

# Install dependencies if needed
npm install
# Open another instance of terminal, enter /api folder and start npm server
gnome-terminal --working-directory="./api" -- npm start
# Start npm server on current folder
npm start
```

# License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)