using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using footballers.Services;
using footballers.Models;

namespace footballers.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TeamController : ControllerBase
    {
        private readonly ITeamService service;

        public TeamController(ITeamService service)
        {
            this.service = service;
        }

        [HttpGet]
        public IEnumerable<Team> GetTeams()
            => service.GetTeams();
    }
}