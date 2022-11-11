package com.Abhishek.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Abhishek.Model.Sitedata;
import com.Abhishek.Service.SiteDataService;

@RestController
@RequestMapping("/sitedata")
public class SiteDataController {

	@Autowired
	private SiteDataService service;
	
	
	@GetMapping("/searchbyname/{name}")
	public Sitedata search( @PathVariable String name) {
		return service.searchByName(name);
	}
	
	@PostMapping("/savedata")
	public Sitedata saveData(@RequestBody Sitedata data	) {
		return service.SaveData(data);
	}
}
