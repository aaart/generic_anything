using Microsoft.AspNetCore.Mvc;
using geany.dotnet_core.Infrastructure.Service.Generic;
using geany.dotnet_core.Scopes.CityList.Dto;
using geany.dotnet_core.Infrastructure.MVC;

namespace geany.dotnet_core.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    public class CityListController : ApiController
    {
        public City[] Cities() => new[] { new City { Name = "Lablyn" }, new City { Name = "Dablyn" } };
    }
}