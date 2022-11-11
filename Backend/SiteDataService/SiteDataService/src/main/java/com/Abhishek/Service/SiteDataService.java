package com.Abhishek.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Abhishek.Model.Sitedata;
import com.Abhishek.Repo.SiteDataRepo;

@Service
public class SiteDataService {

	@Autowired
	private SiteDataRepo repo;
	
	
	public Sitedata searchByName(String name) {
		return repo.findByName(name);
	}
	
	
	public Sitedata SaveData(Sitedata data) {
		return repo.save(data);
	}
}
