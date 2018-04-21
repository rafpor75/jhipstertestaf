package com.saf.service;

import com.saf.service.dto.NoteEsameDTO;
import java.util.List;

/**
 * Service Interface for managing NoteEsame.
 */
public interface NoteEsameService {

    /**
     * Save a noteEsame.
     *
     * @param noteEsameDTO the entity to save
     * @return the persisted entity
     */
    NoteEsameDTO save(NoteEsameDTO noteEsameDTO);

    /**
     * Get all the noteEsames.
     *
     * @return the list of entities
     */
    List<NoteEsameDTO> findAll();

    /**
     * Get the "id" noteEsame.
     *
     * @param id the id of the entity
     * @return the entity
     */
    NoteEsameDTO findOne(Long id);

    /**
     * Delete the "id" noteEsame.
     *
     * @param id the id of the entity
     */
    void delete(Long id);
}
