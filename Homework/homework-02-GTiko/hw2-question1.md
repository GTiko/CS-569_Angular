#1 Write a summary about how Angular application bootstrap?

    Bootstrap is the process of starting up an Angular application by loading the root module and its associated components.It is the entry point of an Angular application.This involves several steps, including the creation of the main application module, the instantiation of the root component, and the compilation and rendering of the application.

#2  
 @NgModule decorator is used to define and configure modules,metadata properties passed to the factory decorator include

    providers: An array of services that are available within the module.
    declarations: The set of components, directives, and pipes that belong to this module.
    imports: The set of NgModules whose exported are available to templates in this module.
    exports: The set of components, directives, and pipes that can be used by other modules.
    bootstrap: The main component to bootstrap when the module is bootstrapped.

#3  
 The @Component factory decorator accepts metadata to customize component behavior and appearance.

    Selector metadata: specifies how the component is identified in the HTML template using a CSS selector.
    Template/TemplateUrl metadata: defines the component's view, either inline or as an external HTML file.
    Styles metadata : allows for defining component-specific CSS styles, either inline or externally.

#4
    Default Emulated: component can potentially affect the styles of other components on the page, as they are not completely isolated.

    ShadowDOM: it provides true encapsulation by creating a separate DOM tree (the shadow tree) for each component and isolating its styles within that tree.Shadow DOM allows to define a scoped CSS for each component.

#5 Output Question Write down the console logs output of the following:

    5.1 which lifecycle hooks were called on Mounting the component?

       Ans:     Child 1: OnInit
                Child 1: doCheck
                Child 2: OnInit
                Child 2: doCheck
                Child 1: AfterViewChecked
                Child 2: AfterViewChecked

         <!-- Angular is running in development mode. -->

                Child 1: doCheck
                Child 2: doCheck
                Child 1: AfterViewChecked
                Child 2: AfterViewChecked


    5.2 which lifecycle hooks were called after the timer callback function is triggered?

       Ans:     Child 1: doCheck
                Child 2: doCheck
                Child 1: AfterViewChecked
                Child 2: AfterViewChecked
