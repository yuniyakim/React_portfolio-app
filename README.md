# Тестовое задание 

Сделать верстку макета с помощью React для десктопа и мобильных устройств.

## Требования к вёрстке:

1. Не использовать плагины галереи или подобные, которые сделают за вас основную задачу.

2. Использовать Flexbox модель (и Grid по желанию) для вёрстки.

3. При изменении размера ширины экрана десктопный вариант должен заменяться мобильным и наоборот.

4. Мобильная верстка должна отображаться при ширине менее 1040 px.

5. Десктопный вариант тянется по ширине максимум для отображения 4 колонок, после этого контент не тянется, увеличиваются только отступы по краям.

6. При выборе категории отображаются только картинки этой категории, при выборе "Show all" отобразить все картинки.

7. Нажатие кнопки "Load more" подгружает еще 9 картинок (можно тех же самых, но с другими названиями, например просто добавить двойку).

8. Для десктопа сделать возможность выбрать картинку нажав на нее, такая картинка должна иметь подсветку зелёным цветом, как в макете. Повторное нажатие убирает подсветку.

9. На десктопе, если есть выбранная картинка, при нажатии кнопки "Del" картинка должна удаляться. После чего она не должна больше отображаться в том числе при переключении категорий.

10. Нажатие на метку категории внутри картинки - так же должно переключать отображения категории.

11. Требований к тому откуда будет загружен объект с картинками и именами нет, это может быть прописано локально в коде, может загружаться удалённо из БД, это по желанию.



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
