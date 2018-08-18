using Newtonsoft.Json.Linq;
using presidents_api.Models;
using System.Collections.Generic;
using System.Linq;

namespace presidents_api.Adapters
{
    public class PresidentsAdapter
    {
        public IList<President> jsontoList(string json)
        {
            JObject DataSheet = JObject.Parse(json);
            IList<JToken> PresidentsJObject = DataSheet["values"].Children().ToList();
            IList<President> Presidents = new List<President>();
            foreach (JToken president in PresidentsJObject)
            {
                Presidents.Add(new President
                {
                    name = president[0].ToString(),
                    birthday = president[1].ToString(),
                    birthplace = president[2].ToString(),
                    deathday = president.ToArray().Length > 3 ? president.ToArray()[3].ToString() : string.Empty,
                    deathplace = president.ToArray().Length > 3 ? president.ToArray()[4].ToString() : string.Empty,
                });
            }
            Presidents.RemoveAt(0);
            return Presidents;
        }
    }
}
