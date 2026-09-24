using Microsoft.AspNetCore.Mvc;

namespace Resq.Controllers
{
    public class IncidentsController : Controller
    {
        // Denne handlingen viser plassholdersiden som senere skal inneholde hendelser.
        public IActionResult Index()
        {
            return View();
        }
    }
}
