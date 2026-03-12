using BookManagementAPI.Models;
using Microsoft.AspNetCore.Mvc;

namespace BookManagementAPI.Controllers;

[ApiController]
[Route("api/[controller]")]
public class BooksController : ControllerBase
{
    private static List<Book> _books = new();
    private static int _nextId = 1;

    [HttpGet]
    public ActionResult<IEnumerable<Book>> GetAll() => Ok(_books);

    [HttpGet("{id}")]
    public ActionResult<Book> GetById(int id)
    {
        var book = _books.FirstOrDefault(b => b.Id == id);
        return book is null ? NotFound() : Ok(book);
    }

    [HttpPost]
    public ActionResult<Book> Create(Book book)
    {
        book.Id = _nextId++;
        _books.Add(book);
        return CreatedAtAction(nameof(GetById), new { id = book.Id }, book);
    }

    [HttpPut("{id}")]
    public IActionResult Update(int id, Book updated)
    {
        var book = _books.FirstOrDefault(b => b.Id == id);
        if (book is null) return NotFound();

        book.Title = updated.Title;
        book.Author = updated.Author;
        book.Isbn = updated.Isbn;
        book.PublicationDate = updated.PublicationDate;

        return NoContent();
    }

    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
        var book = _books.FirstOrDefault(b => b.Id == id);
        if (book is null) return NotFound();

        _books.Remove(book);
        return NoContent();
    }
}