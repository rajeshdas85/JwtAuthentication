using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Microsoft.AspNetCore.Authorization;
using Fitness.JWT.API.Models;

namespace Fitness.JWT.API.Controllers
{
    [Route("api/JwtAuthTest")]
    public class JwtAuthTestController : Controller
    {
        private readonly JsonSerializerSettings _serializerSettings;

        public JwtAuthTestController()
        {
            _serializerSettings = new JsonSerializerSettings
            {
                Formatting = Formatting.Indented
            };
        }
        private static string[] Summaries = new[]
       {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        [HttpGet("[action]")]
        [Authorize(Policy = "FitnessJWT")]
        public IActionResult WeatherForecasts()
        {
            var rng = new Random();

            List<WeatherForecast> lstWeatherForeCast = new List<WeatherForecast>();
            for (int i = 0; i < 5; i++)
            {
                WeatherForecast obj = new WeatherForecast();
                obj.DateFormatted = DateTime.Now.AddDays(i).ToString("d");
                obj.TemperatureC = rng.Next(-20, 55);
                obj.Summary = Summaries[rng.Next(Summaries.Length)];
                lstWeatherForeCast.Add(obj);
            }

            var response = new
            {
                access_token = lstWeatherForeCast,
                State = 1
            };

            var json = JsonConvert.SerializeObject(response, _serializerSettings);
            return new OkObjectResult(json);

        }



        [HttpPost("[action]")]
        [Authorize(Policy = "FitnessJWT")]
        public IActionResult PostWeatherForecasts([FromBody]EmailUser emailUser)
        {
            if (emailUser.emailId == "test@gmail.com")
            {
                var rng = new Random();

                List<WeatherForecast> lstWeatherForeCast = new List<WeatherForecast>();
                for (int i = 0; i < 5; i++)
                {
                    WeatherForecast obj = new WeatherForecast();
                    obj.DateFormatted = DateTime.Now.AddDays(i).ToString("d");
                    obj.TemperatureC = rng.Next(-20, 55);
                    obj.Summary = Summaries[rng.Next(Summaries.Length)];
                    lstWeatherForeCast.Add(obj);
                }

                var response = new
                {
                    access_token = lstWeatherForeCast,
                    State = 1
                };

                var json = JsonConvert.SerializeObject(response, _serializerSettings);
                return new OkObjectResult(json);
            }
            else
            {
                var response = new
                {
                    access_token = "NoData Found",
                    State = 0
                };
                var json = JsonConvert.SerializeObject(response, _serializerSettings);
                return new OkObjectResult(json);

            }

        }


        public class WeatherForecast
        {
            public string DateFormatted { get; set; }
            public int TemperatureC { get; set; }
            public string Summary { get; set; }

            public int TemperatureF
            {
                get
                {
                    return 32 + (int)(TemperatureC / 0.5556);
                }
            }
        }
        [HttpGet]
        [Authorize(Policy = "FitnessJWT")]
        public IActionResult Get()
        {
            var response = new
            {
                made_it = "Welcome Mickey!"
            };

            var json = JsonConvert.SerializeObject(response, _serializerSettings);
            return new OkObjectResult(json);
        }
    }
}