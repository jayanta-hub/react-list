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
    items,
    onDeleteClick: deleteTask,
    onCheckClick: toggleCompleted,
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
| items         | `Yes`    | `Array`    | `[]`     | List of items to display.                         |
| onCheckClick  | `Yes`    | `Function` | `()=>{}` | The method to call when checkbox is clicked.      |
| onDeleteClick | `Yes`    | `Function` | `()=>{}` | The method to call when delete button is clicked. |

# Pagination

**Pagination** is a tiny Javascript library which provides an elegant UI for the end user to use customize pagination.

## Basic Usage

```
import { Pagination } from "../../index.jsx";

...

 const paginationConfig = {
    pageNumber=1,
    pageSize=10,
    pgBtnCount=5,
    onPreviousClick: ()=>{},
    onNextClick: ()=>{},
    onPageActive: ()=>{},
  };
...
return (
    <>
      <Pagination {...paginationConfig} />
    </>
      )
```

## Parameters

| Parameter       | Required | Type       | Default  | Description                                         |
| --------------- | -------- | ---------- | -------- | --------------------------------------------------- |
| pageSize        | `Yes`    | `Number`   | `10`     | The total number of item to display.                |
| pageNumber      | `Yes`    | `Number`   | `1`      | Current page Number.                                |
| pgBtnCount      | `Yes`    | `Number`   | `5`      | The range of pagination Button.                     |
| onPreviousClick | `Yes`    | `Function` | `()=>{}` | The method to call when previous button is clicked. |
| onNextClick     | `Yes`    | `Function` | `()=>{}` | The method to call when next button is clicked.     |
| onPageActive    | `Yes`    | `Function` | `()=>{}` | The method to call when an active page is clicked.  |
|                 |

## Author

![jayanta7381](https://www.npmjs.com/npm-avatar/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdmF0YXJVUkwiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci81ZWZhZGY0MjdjNzliM2YxZDY0ODcxNzI0NjI2NWQzNz9zaXplPTEwMCZkZWZhdWx0PXJldHJvIn0.Ujb96nLBkk2Z0K5NilEVjWj-0Kpa6NTFeIV8c5Ip-mQ)

[Jayanta Garu](https://github.com/jayanta-hub)
