using System;
using ErrorCenter.DTOs;
using ErrorCenter.Models;
using ErrorCenter.Repositories;
using ErrorCenter.Services;
using Microsoft.AspNetCore.Mvc;

namespace ErrorCenter.Controllers
{
    [ApiController]
    [Route("v1/accounts")]
    public class AccountController : ControllerBase
    {
        [HttpPost("login")]
        public IActionResult Login([FromServices] ITokenService tokenService, [FromServices] IUserRepository repository, [FromBody] LoginDTO login)
        {
            try
            {
                User user = repository.GetUser(login.Email, login.Password);
                if (user == null)
                    return NotFound(new { message = "E-mail or password invalid" });


                var accessToken = tokenService.GenerateToken(user);
                return Ok(new
                {
                    accessToken,
                    user = new
                    {
                        user.Email,
                        user.Token
                    }
                });
            }
            catch (Exception ex)
            {
                return BadRequest(new
                {
                    message = "An error occurred while trying to recover data"
                });
            }
        }


        [HttpPost]
        public IActionResult Create([FromServices] IUserRepository repository, [FromBody] CreateNewUserDTO newUser)
        {
            try
            {
                var user = new User
                {
                    Email = newUser.Email,
                    Password = newUser.Password,
                    CreatedAt = DateTime.Now,
                    Role = "User",
                    Token = Guid.NewGuid().ToString()
                };

                repository.Save(user);
                return Ok(new
                {
                    message = "User Created Success"
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

        [HttpPost("recover-password")]
        public IActionResult RecoverPassword([FromServices] IUserRepository repository, [FromBody] RecoverPasswordDTO newUser)
        {
            try
            {
                User user = repository.GetUser(newUser.Email);
                if (user == null)
                    return NotFound(new { message = "E-mail not found" });

                return Ok(user.Password);
            }
            catch (Exception ex)
            {
                return BadRequest(new
                {
                    message = "An error occurred while trying to recover data"
                });
            }
        }
    }
}
