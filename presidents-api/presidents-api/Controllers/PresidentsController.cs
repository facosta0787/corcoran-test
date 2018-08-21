using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using presidents_api.Adapters;
using presidents_api.Models;
using presidents_api.Services;

namespace presidents_api.Controllers
{
    [Route("api/[controller]")]
    public class PresidentsController : Controller
    {
        private IPresidentService presidentService;

        public PresidentsController(IPresidentService presidentService)
        {
            this.presidentService = presidentService;
        }

        // GET api/presidents
        [HttpGet("{sort?}")]
        public string Get(string sort = "")
        {
            Logger.write(sort);
            var response = presidentService.GetAll();
            PresidentsAdapter adapter = new PresidentsAdapter();
            IList<President> presidents = adapter.jsontoList(response);
            if (sort.Equals("asc"))
            {
                IList<President> SortedPresidents = presidents.OrderBy(president => president.name).ToList();
                return JsonConvert.SerializeObject(SortedPresidents,Formatting.Indented);
            }
            if (sort.Equals("desc"))
            {
                IList<President> SortedPresidents = presidents.OrderByDescending(president => president.name).ToList();
                return JsonConvert.SerializeObject(SortedPresidents, Formatting.Indented);
            }
            return JsonConvert.SerializeObject(presidents, Formatting.Indented);
        }
    }

    public static class Logger
    {
        public static void write(object value)
        {
            System.Diagnostics.Debug.WriteLine(value);
        }
    }
}
