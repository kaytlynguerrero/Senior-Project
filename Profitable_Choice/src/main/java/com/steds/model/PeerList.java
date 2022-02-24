package com.steds.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.ArrayList;

public class PeerList {
    @JsonProperty("name")
    private String name;
    @JsonProperty("peersList")
    private ArrayList peers;

    public PeerList() {
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public ArrayList getPeers() {
        return peers;
    }

    public void setPeers(ArrayList peers) {
        this.peers = peers;
    }
}
