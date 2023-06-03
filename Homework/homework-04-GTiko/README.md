[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/eeQw7TnC)
[![Open in Codespaces](https://classroom.github.com/assets/launch-codespace-7f7980b617ed060a017424585567c406b6ee15c891e84e1186181d67ecf80aa0.svg)](https://classroom.github.com/open-in-codespaces?assignment_repo_id=11271640)
# CS569 Homework
## Coding Exercise
1. Create a custom directive called `highlight` that is going to set the following CSS to the host element `text-shadow: 1px 1px 2px #cccccc;` when the mouse hovers into the host element and remove the shadow when the mourse moves out. 
```html
<p highlight>This text have a shadow when the mouse hovers over it, and no shadow when the mouse leaves.</p>
```
  
2. Create a custom pipe `shorten` that truncates strings for a given length and concatenate `...` at the end. Example:
```javascript
@Component({template: `{{'Welcome to WADII course' | shorten:10}}`}) // it will render `Welcome to...`
```
```javascript
@Component({template: `{{'Welcome MSD!' | shorten:25}}`}) // it will render `Welcome MSD!`, no changes.
```
## Optional Exercises
1. Create a custom directive called `colorize` that is going to set the font color value of the host component text to a random color value every 1 second. Colors array is declared in the directive state: `['red', 'blue', 'green', 'yellow', 'maroon'....etc]`. Make sure your code does not lead to a memory leak (implement ngOnDestroy to clear your interval).
```html
<p colorize>This text will change color every second</p>
```
```javascript
// the following code picks a random element from an array
const random_item = my_array[Math.floor(Math.random()*my_array.length)];
```
  
2. Create a custom directive called `clickToIncrease` that increases the size of the host element text by `n` pixels every time users double-click on the host element, the `n` value is passed as an input property to the directive. 
```javascript
@Component({
  selector: 'app-root',
  template: `
    <p [clickToIncrease]="size1"></p> 
    <!-- when double-click the paragraph, it will increase its size by 2px -->

    <p [clickToIncrease]="size2"></p> 
    <!-- when double-click the paragraph, it will increase its size by 6px -->
`})
class AppComponent{
  size1 : number = 2;
  size2 : number = 6;
}

```
3. Create a custom pipe `swapLetters` that works on strings and receives a swap object as follows: `{'old_letter': 'new_letter', ...}`. Example:
```javascript
@Component({template: `{{'Asaad and Theo' | swapLetters:{'a':'@', 'o': '0'} }}`}) // it will render `@s@@d @nd The0`
```
  
