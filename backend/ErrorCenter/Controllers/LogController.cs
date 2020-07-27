using System;
using ErrorCenter.DTOs;
using ErrorCenter.Models;
using ErrorCenter.Repositories;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace ErrorCenter.Controllers
{
    [ApiController]
    [Route("v1/logs")]
    [Authorize]
    public class LogController : ControllerBase
    {
        [HttpGet]
        public IActionResult Get([FromServices] ILogRepository repository, [FromQuery] LogSearchDTO logSearch)
        {
            try
            {
                var logs = repository.GetLogs(logSearch.Environment, logSearch.SearchBy, logSearch.Search, logSearch.OrderBy);
                return Ok(logs);
            }
            catch (Exception ex)
            {
                return BadRequest(new
                {
                    message = "An error occurred while trying to save data"
                });
            }
        }

        [HttpGet("{id}")]
        public IActionResult Get([FromServices] ILogRepository repository, int id)
        {
            try
            {
                var log = repository.GetById(id);
                return Ok(log);
            }
            catch (Exception ex)
            {
                return BadRequest(new
                {
                    message = "An error occurred while trying to save data"
                });
            }
        }


        [HttpPost]
        public IActionResult Create([FromServices] ILogRepository repository, [FromBody] CreateNewLogDTO newLog)
        {
            try
            {

                var log = new Log
                {
                    Title = newLog.Title,
                    Description = newLog.Description,
                    Environment = newLog.Environment,
                    Event = newLog.Event,
                    Frequency = newLog.Frequency,
                    Host = newLog.Host,
                    Level = newLog.Level,
                    UserToken = User.Identity.Name,
                    CreatedAt = DateTime.Now
                };

                repository.Save(log);

                return Ok(new
                {
                    message = "Log created success"
                });
            }
            catch (Exception ex)
            {
                return BadRequest(new
                {
                    message = "An error occurred while trying to save data"
                });
            }
        }

        [HttpDelete("{id}")]
        public IActionResult Remove(int id)
        {
            try
            {
                //repository.Remove(id);

                return Ok(new
                {
                    message = "Log remove success"
                });
            }
            catch (Exception ex)
            {
                return BadRequest(new
                {
                    message = "An error occurred while trying to remove data"
                });
            }
        }
    }
}
