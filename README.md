# Description & requirements

Your objective in this assignment is to create a countdown app built using this boilerplate (+ any
other tools of your choice) that follows the design specifications provided
[in this Figma file](https://www.figma.com/file/UPEugUz5jM9IzIkWft2Y9m/NC-challenge). The app should
work in portrait as well as in landscape mode while the text displayed on the screen should always
fill the whole width of the screen.

In your app, it should be possible to define the end date and the name of the event taking place on
that day. The countdown should always start from the current time and it should display the time
remaining to your specified end date in the following format: Days, Hours(h), Minutes(m), Seconds(s)
_(e.g., 3 days, 15 h, 20 m, 5 s)_. To make sure the text always covers the entire screen width, it
should resize whenever necessary to achieve this objective.

The purpose of the solution is to “fit” the input text into an element in one line (no line breaks,
filling the whole width) using the maximum possible font-size.

Please make sure that your text fit solution is reusable and that the event name, as well as the
specified end date, are persisted between page reloads.

## Running the application locally

**Note:** Ensure you have [NodeJs](https://nodejs.org/en/download) installed.

- Run `ng add @angular/material` to install Angular Material.
- Run `npm i` to install node_modules and dependencies.

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will
automatically reload if you change any of the source files.

## Running unit tests

- Run `ng test` to execute the unit test via
  [karma](https://karma-runner.github.io./latest/index.html).

## How to improve solution

- In the `resize-label.directive.ts`, one option was to use the window's width instead of the
  parent's. However, for better reusability, I preferred using the parent so that it can work within
  any container.
- **Organize the project:** at the moment we have the storage service and the resize directive in
  the same folder, I would modify the structre of the app so it would be easier to manage in the
  future.
- Maybe the session-storage.service was not needed for the only pourpose of setting and retrieving
  and doing the session storage in the app component, I prefer having this as a service so it can be
  centralized, we can also enhance it by handling types or null arguments.
- Ideally we would store the data on every change using maybe a TanStack mutation but since the idea
  is to temporary save the input's data, session storage is a great solution.
- for the inputs to be persisted, I can create a class in the styles.scss so in case we want to add
  more inputs, it would look the same everywhere.
- **Note:** this is not improvement but I would modify the prettier file so I can use semi colons,
  personal preference (I did that though).

## Steps for application to be ready for production

1. **Add More Unit Tests:** Some tests have been created, but more are needed to cover additional
   possible scenarios, more in the directive, to check the min and Max FontSize or when the parent
   width changes.
2. **Configure the build for prod environment:**Angular allows modifying certain configurations for
   different environments in the `angular.json` file, such as hiding the codebase, ignoring checks
   and warnings, and more. We can create an NPM command to build and run the application in the
   production environment, e.g. `"build:prod": "ng build --configuration production"`. This will
   generate a `dist` folder containing the files ready for deployment, which will be needed later.

In `angular.json`, you can modify settings like optimization, outputHashing, sourceMap, extractCss,
namedChunks, aot, and buildOptimizer to further optimize the build.

3. **Secure the Application:** Ensure the application uses the HTTPS protocol and disable debugging
   tools to prevent security vulnerabilities such as XSS (Cross-Site Scripting).
4. **Use and configure server:** Two main tasks need to be completed:

- Add the dist folder.
- Ensure the index.html file is used for all routes to support Angular's routing.

**Note:** For larger applications, additional steps such as implementing lazy loading, setting up a
CI/CD pipeline (e.g., Jenkins), optimizing assets, and configuring environment variables are
necessary. While this is a small application, these practices are essential for all products.

## Further help

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version
17.3.6.

To get more help on the Angular CLI use `ng help` or go check out the
[Angular CLI Overview and Command Reference](https://angular.io/cli) page.
