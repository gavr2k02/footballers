using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using footballers.Services;
using footballers.Models;

namespace footballers.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class FootballerController : ControllerBase
    {
        private readonly IFootballerService service;

        public FootballerController(IFootballerService service)
        {
            this.service = service;
        }

        [HttpGet]
        public IEnumerable<Footballer> GetFootballers()
            => service.GetFootballers();

        [HttpPost]
        public ActionResult AddFootballer(Footballer footballer)
            => service.AddFootballer(footballer) ? Ok() : StatusCode(500);

        [HttpPut]
        public ActionResult UpdateFootballer(Footballer footballer)
            => service.UpdateFootballer(footballer) ? Ok() : StatusCode(500);
    }
}