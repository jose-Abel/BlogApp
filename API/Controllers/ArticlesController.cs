using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Application;
using Application.Articles;
using Domain;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
  public class ArticlesController : BaseApiController
  {

    [HttpGet]
    public async Task<ActionResult<List<Article>>> GetArticles()
    {
      return await Mediator.Send(new List.Query());
    }
  }
}