# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm install`

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

# CustomList

**CustomList** is a react component which provides an elegant UI for the end user to display list of items.

## Basic Usage

```
import { CustomList } from "../../index.jsx";

...

const customListConfig = {
    onDeleteClick: deleteTask,
    onCheckClick: toggleCompleted,
    currentItems,
  };
...
return (
    <>
       <CustomList {...customListConfig} />
    </>
      )
```

## Parameters

| Parameter     | Required | Type       | Default  | Description                                       |
| ------------- | -------- | ---------- | -------- | ------------------------------------------------- |
| currentItems  | `Yes`    | `Array`    | `[]`     | List of items to display.                         |
| onCheckClick  | `Yes`    | `Function` | `()=>{}` | The method to call when checkbox is clicked.      |
| onDeleteClick | `Yes`    | `Function` | `()=>{}` | The method to call when delete button is clicked. |

|

# Pagination

**Pagination** is a tiny Javascript library which provides an elegant UI for the end user to use customize pagination. It also features a carefully crafted flow to handle edge cases for volatile user gestures. We provide default UI, but you can always customize the appearance as you like.

## Basic Usage

```
import { Pagination } from "../../index.jsx";

...

 const paginationConfig = {
    onPreviousClick: ()=>{},
    onNextClick: ()=>{},
    onPageChange: ()=>{},
    currentPage=1,
    pageCount=10,
    maxPageNumbersToShow=5,
  };
...
return (
    <>
      <Pagination {...paginationConfig} />
    </>
      )
```

## Parameters

| Parameter            | Required | Type       | Default  | Description                                                |
| -------------------- | -------- | ---------- | -------- | ---------------------------------------------------------- |
| pageCount            | `Yes`    | `Number`   | `0`      | The total number of pages.                                 |
| currentPage          | `Yes`    | `Number`   | `0`      | This callback is called when user taps outside of a Modal. |
| maxPageNumbersToShow | `Yes`    | `Number`   | `5`      | The range of pages displayed.                              |
| onPreviousClick      | `Yes`    | `Function` | `()=>{}` | The method to call when previous button is clicked.        |
| onNextClick          | `Yes`    | `Function` | `()=>{}` | The method to call when next button is clicked.            |
| onPageChange         | `Yes`    | `Function` | `()=>{}` | The method to call when a page is clicked.                 |
|                      |

## Author

![jayanta7381](https://www.npmjs.com/npm-avatar/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdmF0YXJVUkwiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci81ZWZhZGY0MjdjNzliM2YxZDY0ODcxNzI0NjI2NWQzNz9zaXplPTEwMCZkZWZhdWx0PXJldHJvIn0.Ujb96nLBkk2Z0K5NilEVjWj-0Kpa6NTFeIV8c5Ip-mQ)

[Jayanta Garu](https://github.com/jayanta-hub)
