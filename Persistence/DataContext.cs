using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using Microsoft.EntityFrameworkCore;

namespace Persistence
{
  public class DataContext : DbContext

  { // base is the call to the DbContext constructor and passing the options to it

    public DataContext(DbContextOptions options) : base(options)
    {

    }

    public DbSet<Article> Articles { get; set; }
  }
}