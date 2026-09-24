using Microsoft.AspNetCore.Mvc;

namespace Resq.Controllers
{
    public class ResourcesController : Controller
    {
        // Denne handlingen viser plassholdersiden som senere skal inneholde ressurser.
        public IActionResult Index()
        {
            return View();
        }
    }
}
