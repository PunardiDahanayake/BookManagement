# Book Manager

A full-stack web application for managing a book collection. Built with ASP.NET Core Web API on the backend and Angular 17 on the frontend.

## Features

- View all books in a clean table layout
- Add new books through a slide-out form panel
- Edit existing book details
- Delete books from the collection
- Real-time updates after every action

## Tech Stack

| Layer | Technology |
|---|---|
| Backend | ASP.NET Core Web API (.NET 8) |
| Language | C# |
| Frontend | Angular 17 |
| Styling | CSS with custom design |
| Data Store | In-memory List |

## Project Structure
```
LibraryManagement/
├── BookManagement/       # ASP.NET Web API
│   ├── Controllers/
│   │   └── BooksController.cs
│   ├── Models/
│   │   └── Book.cs
│   └── Program.cs
└── book-client/          # Angular 17
    └── src/
        └── app/
            ├── app.component.ts
            ├── app.component.html
            ├── app.component.css
            ├── book.model.ts
            └── book.service.ts
```

## Getting Started

### Backend
```bash
cd BookManagement
dotnet run
# Runs on https://localhost:7084
```

### Frontend
```bash
cd book-client
ng serve
# Runs on http://localhost:4200
```

Open your browser at `http://localhost:4200`


Technologies: C#, .NET 8, ASP.NET Core Web API, Angular 17, TypeScript, HTML, CSS
