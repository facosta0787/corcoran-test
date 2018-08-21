using System.Net;

namespace presidents_api.Services
{
    public class PresidentsService : IPresidentService
    {
        private string url = "https://sheets.googleapis.com/v4/spreadsheets/1i2qbKeasPptIrY1PkFVjbHSrLtKEPIIwES6m2l2Mdd8/values/A1%3AE45?key=AIzaSyAla3O0Cu93XSeQsu9E9J-5SV4sRE5Lr4Q";

        public string GetAll()
        {
            return new WebClient().DownloadString(url);
        }
    }
}