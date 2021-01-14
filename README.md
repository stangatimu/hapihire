## How to run locally

clone the repository

```
git clone https://github.com/stangatimu/hapihire.git
```

In the project folder run the following commands

```
npm install
npm start
```

All set!!!

### Technologies used

---

1. React - Single page web applications.
2. Axios - to make `http` calls to the API.
   compared to other solutions axios has better error handling for https requests.
3. Material-UI - pre-built material based components and javascript based styling system enables develper to rapidly develope application by only focusing on core functionality and not worrying about create basic components.
4. Redux - For application state management. Redux offers a well structured and easy to understand way to management application state.
5. Jest/Enzyme - React testing liblaries

### Improvements

---

1. Given more time I would migrated it from a REST to GraphQL.
   As at the moment the application is fetching a lot of data from the backend that is only need when a certain candidate is selected. Using GrapgQL and be able to only select the date that is needed for a particular view from the backed can greatly increate the loading time,
   Also GraphQL(Apollo) comes with inbuilt caching out of the box.
2. I would also write better and more units tests if time allowed.
3. The comments section is missing and but I hope I will be able to add it before this solution is reviewed.
