using System;

namespace Domain
{
  public class Article
  {
    public Guid Id { get; set; }

    public string Title { get; set; }

    public string Description { get; set; }

    public DateTime CreatedAt { get; set; }

    public string Category { get; set; }

  }
}