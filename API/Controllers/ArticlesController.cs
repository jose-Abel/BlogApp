using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Application;
using Application.Articles;
using Domain;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
  public class ActivitiesController : BaseApiController
  {

    [HttpGet]
    public async Task<ActionResult<List<Article>>> GetActivities()
    {
      return await Mediator.Send(new List.Query());
    }
  }
}